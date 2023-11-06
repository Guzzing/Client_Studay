import React from 'react'
import { SidoType } from '../../types/selectcity.ts'
import Select from '@/components/common/inputbox/select/Select.tsx'
import StepQuestion from '@/components/common/stepquestion/StepQuestion.tsx'

interface SelectCityStepProps extends SidoType {
  onChange: (selectedSido: string) => void
}

const SelectCityStep1 = ({
  sidoArr,
  select,
  onChange
}: SelectCityStepProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value)
    onChange(event.target.value)
  }

  return (
    <>
      <span className={'headline-30 text-left mt-[60px] ml-[37px]'}>
        {'검색하고자 하는'}
      </span>
      <span className={'headline-30 text-left mt-[15px] ml-[37px] mb-[44px]'}>
        {'학원의 위치를 알려주세요'}
      </span>
      <div className={'flex flex-col ml-[37px]'}>
        <StepQuestion text={'도시'} step={1}></StepQuestion>
        <div className={'mt-[14px]'}>
          <Select
            selectType={'Single'}
            fullWidth={true}
            options={['', ...sidoArr]}
            value={select}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  )
}

export default SelectCityStep1