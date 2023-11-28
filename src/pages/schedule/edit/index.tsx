import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import Button from '@/components/common/button/Button'
import ListRowSelect from '@/components/common/listRowSelect/ListRowSelect'
import Spacing from '@/components/common/spacing/Spacing'
import { beforeEditInfoScheduleApi } from '@/libs/api/schedule/scheduleApi'
import { postScheduleApi } from '@/libs/api/schedule/scheduleApi'
import { PostScheduleType } from '@/libs/api/schedule/scheduleType'
import { scheduleAtom } from '@/libs/store/scheduleInfo'
import AddScheduleAcademy from '@/pages/schedule/new/AddScheduleAcademy'
import AddScheduleMemo from '@/pages/schedule/new/AddScheduleMemo'
import AddScheduleTime from '@/pages/schedule/new/AddScheduleTime'

const EditSchedule = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const scheduleId = Number.parseInt(location.pathname.split('/')[2], 10)
  const [scheduleInfo, setScheduleInfo] = useAtom(scheduleAtom)

  const { data } = useQuery({
    queryKey: ['beforeEditData', scheduleId],
    queryFn: () => beforeEditInfoScheduleApi({ scheduleId })
  })

  const postNewScheduleMutation = useMutation({
    onSuccess: (data) => {
      alert('일정 수정 완료!')
      navigate(`/schedule/${data.academyTimeTemplateIds}`)
    },
    mutationFn: (scheduleInfo: PostScheduleType) =>
      postScheduleApi(scheduleInfo)
  })
  return (
    <div className={'flex flex-col relative w-full h-full'}>
      <div className={'px-[20px]'}>
        <AddScheduleAcademy />
        <h2 className={'body-16 mb-[13px]'}>{'일정 설정하기'}</h2>
        <AddScheduleTime />
        <ListRowSelect
          title={'알림'}
          options={['없음', '하루 전']}
          values={[0, 1]}
          selecttype={'Single'}
          onChange={(e) => {
            Number.parseInt(e.target.value, 10) === 0
              ? setScheduleInfo({ ...scheduleInfo, isAlarmed: false })
              : setScheduleInfo({ ...scheduleInfo, isAlarmed: true })
          }}
        />
        <Spacing size={20} />
        <AddScheduleMemo />
      </div>
      <Button
        style={{ position: 'absolute', width: '100%', bottom: 0 }}
        buttonType={'Square'}
        label={'일정 등록 완료!'}
        onClick={() => {
          postNewScheduleMutation.mutate(scheduleInfo)
        }}
      />
    </div>
  )
}

export default EditSchedule
