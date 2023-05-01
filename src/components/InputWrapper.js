import { useEffect, useRef } from 'react'
import { removeZerosFromStart } from '../helpers/string-formatters'

export default function InputWrapper({ data, updateStandardUnit, standardUnit = 0 }) {
    const inputElement = useRef()

    const convertToStandardUnit = () => {
        const standardUnitFormula = data.standard_unit_formula
        const currentValue = inputElement.current.value ? inputElement.current.value : 0
        const standardUnitFormulaAfterSubstitution = standardUnitFormula.replace(/x/, currentValue.toString())
        const standardUnitFormulaSolution = eval(removeZerosFromStart(standardUnitFormulaAfterSubstitution))
        updateStandardUnit(standardUnitFormulaSolution)
    }

    const convertToCurrentUnit = () => {
        const currentUnitFormula = data.current_unit_formula
        const currentUnitFormulaAfterSubstitution = currentUnitFormula.replace(/x/, standardUnit.toString())
        const currentValue = eval(removeZerosFromStart(currentUnitFormulaAfterSubstitution))
        if (document.activeElement !== inputElement.current) {
            if (currentValue === 0) {
                inputElement.current.value = ""
            } else {
                inputElement.current.value = currentValue.toString()
            }
        }
    }

    useEffect(() => {
        convertToCurrentUnit()
    }, [standardUnit])

    return (
        <div className="input-wrapper">
            <label htmlFor={data.title}>Enter length in {data.title} here</label>
            <input
                id={data.title}
                type="number"
                placeholder={`Enter length in ${data.title} here`}
                ref={inputElement}
                onChange={() => convertToStandardUnit()}
            />
        </div>
    )
}
