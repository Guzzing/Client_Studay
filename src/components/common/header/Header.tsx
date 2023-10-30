// 봐 결국 함수야..!
import type { HeaderProps } from './HeaderType'
import Icon from '../icon/Icon'

const Header = ({ headerType, pageTitle = 'pageTitle' }: HeaderProps) => {
  return (
    <header
      className={`fixed left-[50%] top-0 translate-x-[-50%] w-[390px] h-[80px] bg-white-0 text-black-900 px-[22px] border border-black-900`}
    >
      <div
        className={`w-full h-full ${
          headerType === 'BackPush' ||
          headerType === 'Close' ||
          headerType === 'CloseWithTitle'
            ? 'flex items-center justify-start'
            : 'flex items-center justify-between'
        }`}
      >
        {headerType === 'BackPush' ? (
          <span onClick={() => alert('뒤로가기')}>
            <Icon icon={'BackPush'} classStyle={'cursor-pointer'} />
          </span>
        ) : headerType === 'Logo' ? (
          <>
            <div>
              <span>{'👍'}</span>
              <span className={'mx-[6px]'}>{pageTitle}</span>
            </div>
            <div className={'flex items-center justify-between'}>
              <div className={'mx-[7px]'} onClick={() => alert('알림보기!')}>
                <Icon icon={'Alarm'} classStyle={'cursor-pointer'} />
              </div>
              <span onClick={() => alert('사이드 바 열기')}>
                <Icon icon={'SideBar'} classStyle={'cursor-pointer'} />
              </span>
            </div>
          </>
        ) : headerType === 'Close' ? (
          <span onClick={() => alert('페이지 닫기')}>
            <Icon icon={'Close'} classStyle={'cursor-pointer'} />
          </span>
        ) : headerType === 'CloseWithTitle' ? (
          <div className={'flex cursor-pointer'}>
            <span onClick={() => alert('페이지 닫기')}>
              <Icon icon={'Close'} classStyle={'cursor-pointer'} />
            </span>
            <span className={'mx-[6px]'}>{pageTitle}</span>
          </div>
        ) : (
          ''
        )}
      </div>
    </header>
  )
}

export default Header
