import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import Button from '@/components/common/button/Button'
import Header from '@/components/common/header/Header'
import Input from '@/components/common/inputbox/input/Input'
import Select from '@/components/common/inputbox/select/Select'
import Spacing from '@/components/common/spacing/Spacing'
import StepQuestion from '@/components/common/stepquestion/StepQuestion'
import { getChildrenInfo } from '@/libs/api/children/ChildrenApi'
import {
  onboardingApi,
  createChildApi
} from '@/libs/api/onboarding/onboardingApi'
import {
  initialCurPageNumber,
  onboardingPageData,
  isSubmit
} from '@/libs/store/onboardingAtom'
import { getItem, setItem } from '@/libs/utils/storage'
import { PAGE_CONTENT, CHILD_GRADE } from '@/pages/onboarding/constants'

const Onboarding = () => {
  const [curPage, setCurPage] = useAtom(initialCurPageNumber)
  const [pageData, setPageData] = useAtom(onboardingPageData)
  const [isDone, setIsDone] = useAtom(isSubmit)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const selectRef = useRef<HTMLSelectElement | null>(null)
  const navigate = useNavigate()
  useEffect(() => {
    const res = async () => {
      const children = await getChildrenInfo()
      if (children.length === 5) {
        alert('자식이 5명 가득찼습니다! 홈페이지로 이동합니다')
        navigate('/')
      } else {
        setCurPage(children.length + 2)
      }
    }
    Array.isArray(getItem('onboarding')) || res()
  }, [])

  useEffect(() => {
    if (isDone) {
      const saveUser = async () => {
        const res = await onboardingApi(pageData)
        res && navigate('/')
      }
      const saveChild = async () => {
        const res = await createChildApi({
          nickname: inputRef.current?.value as string,
          grade: selectRef.current?.value as string
        })
        res && navigate('/')
      }
      if (Array.isArray(getItem('onboarding'))) {
        setItem('onboarding', JSON.stringify(pageData)) // 스토리지에 저장하고...!
        saveUser()
      } else {
        setItem(
          'onboarding',
          JSON.stringify({
            ...pageData,
            children: [
              {
                ...pageData.children[0],
                nickname:
                  curPage === 2
                    ? inputRef.current?.value || pageData.children[0].nickname
                    : (inputRef.current?.value as string),
                grade:
                  curPage === 2
                    ? selectRef.current?.value || pageData.children[0].grade
                    : (selectRef.current?.value as string)
              },
              ...(curPage === 2 ? [] : pageData.children.slice(1))
            ]
          })
        )
        saveChild()
      }
      setIsDone(false)
    }
  }, [isDone])
  return (
    <div className={'pl-[36px] border h-full w-full relative'}>
      <Header
        headerType={'BackPush'}
        pageTitle={''}
        onClick={() =>
          Array.isArray(getItem('onboarding')) ? setCurPage(0) : navigate('/')
        }
      />
      <Spacing size={125} />
      <h2 className={'headline-30 leading-[40px] w-[250px]'}>
        {PAGE_CONTENT[curPage].mainTitle}
      </h2>
      <p className={'body-15-gray w-[200px] leading-[20px]'}>
        {PAGE_CONTENT[curPage].subTitle}
      </p>

      <div className={'mt-[30px]'}>
        {PAGE_CONTENT[curPage].inputTitle.map((title, index) => (
          <li key={index} className={'list-none mt-[25px]'}>
            <StepQuestion
              text={title}
              step={PAGE_CONTENT[curPage].step[index]}
            />
            {index === 0 ? (
              <Input
                inputType={'Default'}
                ref={inputRef}
                field={
                  curPage === 0
                    ? 'nickname'
                    : curPage === 1
                    ? 'email'
                    : curPage >= 2
                    ? 'childname'
                    : ''
                }
                placeholder={
                  curPage === 0
                    ? '닉네임 입력해주세요'
                    : curPage === 1
                    ? '이메일 입력해주세요'
                    : curPage >= 2
                    ? '아이에게 닉네임을 선물해주세요'
                    : ''
                }
              />
            ) : (
              <Select
                selectType={'Single'}
                options={CHILD_GRADE}
                ref={selectRef}
              />
            )}
          </li>
        ))}
      </div>
      <div className={'absolute bottom-[25px] left-[22px]'}>
        {PAGE_CONTENT[curPage].buttonType.map((value, index) =>
          index === 0 && value !== '' ? (
            <Button
              key={index}
              className={
                storage.length === 0
                  ? validate('nickname', inputValue)
                    ? 'bg-gray-400 text-white-0 w-[343px] h-[56px] rounded-[10px] cursor-not-allowed'
                    : 'bg-blue-500 text-white-0 w-[343px] h-[56px] rounded-[10px]'
                  : storage.length === 1
                  ? validate('email', value)
                    ? 'bg-gray-400 text-white-0 w-[343px] h-[56px] rounded-[10px] cursor-not-allowed'
                    : 'bg-blue-500 text-white-0 w-[343px] h-[56px] rounded-[10px]'
                  : 'bg-blue-500 text-white-0 w-[343px] h-[56px] rounded-[10px]'
              }
              label={value}
              buttonType={'Round-blue-700'}
              onClick={() => {
                if (
                  curPage < 6 &&
                  inputRef.current?.value !== '' &&
                  selectRef.current?.value !== ''
                ) {
                  setCurPage(curPage + 1)
                  if (curPage === 0) {
                    setPageData({
                      ...pageData,
                      nickname: inputRef.current?.value as string
                    })
                  } else if (curPage === 1) {
                    setPageData({
                      ...pageData,
                      email: inputRef.current?.value as string
                    })
                  } else {
                    setPageData({
                      ...pageData,
                      children: [
                        {
                          ...pageData.children[0],
                          nickname:
                            curPage === 2
                              ? inputRef.current?.value ||
                                pageData.children[0].nickname
                              : (inputRef.current?.value as string),
                          grade:
                            curPage === 2
                              ? selectRef.current?.value ||
                                pageData.children[0].grade
                              : (selectRef.current?.value as string)
                        },
                        ...pageData.children.slice(curPage === 2 ? 1 : 0)
                      ]
                    })
                  }
                } else {
                  alert('빈값은 죄송하지만 안됩니다!')
                }
              }}
            />
          ) : index === 1 && value !== '' ? (
            <Button
              key={index}
              label={value}
              className={'my-[10px]'}
              buttonType={'Round-blue-500'}
              onClick={() => {
                if (
                  curPage <= 6 &&
                  inputRef.current?.value !== '' &&
                  selectRef.current?.value !== ''
                ) {
                  setPageData({
                    ...pageData,
                    children: [
                      {
                        ...pageData.children[0],
                        nickname:
                          curPage === 2
                            ? inputRef.current?.value ||
                              pageData.children[0].nickname
                            : (inputRef.current?.value as string),
                        grade:
                          curPage === 2
                            ? selectRef.current?.value ||
                              pageData.children[0].grade
                            : (selectRef.current?.value as string)
                      },
                      ...pageData.children.slice(curPage === 2 ? 1 : 0)
                    ]
                  })
                  inputRef.current && (inputRef.current.value = '')
                  selectRef.current && (selectRef.current.value = '')
                  setIsDone(true)
                } else {
                  alert('빈 값은 허용되지 않습니다.')
                }
              }}
            />
          ) : (
            ''
          )
        )}
      </div>
    </div>
  )
}

export default Onboarding
