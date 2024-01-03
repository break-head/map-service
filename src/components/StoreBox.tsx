import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import {
  AiOutlineClose,
  AiOutlineInfoCircle,
  AiOutlineCheck,
  AiOutlinePhone,
} from 'react-icons/ai'
import { HiOutlineMap } from 'react-icons/hi'

interface StoreBoxProps {
  store: any
  setStore: Dispatch<SetStateAction<any>>
}

export default function StoreBox({ store, setStore }: StoreBoxProps) {
  return (
    <div className="fixed transition ease-in-out delay-150 inset-x-0 mx-auto bottom-20 rounded shadow-lg max-w-sm md:max-w-xl z-10 w-full bg-white">
      {store && (
        <>
          <div className="p-8">
            <div className="flex justify-between items-start">
              <div className="flex gap-4 itmes-center">
                <Image
                  src={
                    store?.bizcnd_code_nm
                      ? `/images/markers/${store?.bizcnd_code_nm}.png`
                      : '/images/markers/default.png'
                  }
                  alt="store"
                  width={40}
                  height={40}
                />
                <div>
                  <div className="font-semibold">
                    {store?.upso_nm}
                  </div>
                  <div className="font-sm">{store?.cob_code_nm}</div>
                </div>
              </div>
              <button type="button" onClick={() => setStore(null)}>
                <AiOutlineClose />
              </button>
            </div>
            <div className="mt-2 flex gap-2 items-center">
              <HiOutlineMap />
              {store?.rdn_code_nm}
            </div>
            <div className="mt-2 flex gap-2 items-center">
              <AiOutlinePhone />
              {store?.tel_no}
            </div>
            <div className="mt-2 flex gap-2 items-center">
              <AiOutlineInfoCircle />
              {store?.crtfc_gbn_nm}
            </div>
            <div className="mt-2 flex gap-2 items-center">
              <AiOutlineCheck />
              {store?.bizcnd_code_nm}
            </div>
          </div>
          <button
            type="button"
            onClick={() => window.alert('상세보기 작업중')}
            className="w-full bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 py-3 text-white  font-semibold rounded-b-lg"
          >
            상세보기
          </button>
        </>
      )}
    </div>
  )
}
