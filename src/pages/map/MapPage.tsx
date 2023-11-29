import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai/index'
import BottomSheet from '@/components/common/bottomsheet/BottomSheet.tsx'
import Spacing from '@/components/common/spacing/Spacing.tsx'
import MapSearchBar from '@/components/map/MapSearchBar.tsx'
import NaverMap from '@/components/map/NaverMap.tsx'
import { getAcademyFilter } from '@/libs/api/filter/filterApi.ts'
import { getAcademyList } from '@/libs/api/mapapi/mapApi.ts'
import { mapInfoAtom, selectAcademyAtom } from '@/libs/store/mapInfoAtom.ts'

const MapPage = () => {
  const [mapInfo] = useAtom(mapInfoAtom)
  const [selectAcademy] = useAtom(selectAcademyAtom)
  const location = useLocation()
  const queryString = location.search

  const { data: academyList } = useQuery({
    queryKey: ['academyList', mapInfo.latitude, mapInfo.longitude],
    queryFn: () =>
      getAcademyList({
        latitude: mapInfo.latitude,
        longitude: mapInfo.longitude
      }),
    enabled: !queryString
  })

  const { data: academyFilterList } = useQuery({
    queryKey: ['academyFilterList', queryString],
    queryFn: () => getAcademyFilter({ queryString: queryString }),
    enabled: queryString.length > 0
  })

  return (
    <div className={'bg-white-100 w-full h-full overflow-hidden'}>
      <Spacing size={80} />
      <MapSearchBar />
      <NaverMap
        academyList={
          academyList?.academiesByLocationResponse ||
          academyFilterList?.academyFilterResponses ||
          []
        }
      />
      {selectAcademy.isBottomSheet && (
        <BottomSheet
          title={selectAcademy.academy.academyName}
          address={selectAcademy.academy.address}
          number={selectAcademy.academy.contact}
          academyId={selectAcademy.academy.academyId}
        />
      )}
    </div>
  )
}
export default MapPage
