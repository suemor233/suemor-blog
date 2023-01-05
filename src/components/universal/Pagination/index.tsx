import clsx from 'clsx'
import { useRouter } from 'next/router'
import type { FC, HTMLProps, PropsWithChildren } from 'react'
import { memo, useEffect, useMemo, useState } from 'react'
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md'

export interface PaginationProps {
  total: number
  initialPage: number
  onChange?: (page: number) => void
}

const Pagination: FC<PaginationProps> = (props) => {
  const { total, initialPage } = props
  const [currentPage, setCurrentPage] = useState(initialPage)
  const router = useRouter()
  useEffect(() => {
    !router?.query.page && setCurrentPage(initialPage)
  }, [router?.query])
  const paginationCenter = useMemo(() => {
    const front = () => {
      const arr: number[] = []
      for (let i = 2; i > 0; i--) {
        if (currentPage > 3) {
          arr.push(currentPage - i)
        } else {
          if (currentPage === 3) {
            arr.push(2)
          }
          break
        }
      }
      return arr
    }

    const center = () => {
      const arr: number[] = []
      if (!(currentPage === 1 || currentPage === total)) {
        arr.push(currentPage)
      }
      return arr
    }

    const behind = () => {
      const arr: number[] = []
      for (let i = 1; i < 3; i++) {
        if (total - currentPage > 2) {
          arr.push(currentPage + i)
        } else {
          if (total - currentPage === 2) {
            arr.push(total - 1)
          }
          break
        }
      }
      return arr
    }
    return [
      total != 1 ? 1 : [],
      currentPage > 4 ? '...' : [],
      ...front(),
      ...center(),
      ...behind(),
      total - 3 > currentPage ? '...' : [],
      total,
    ].flat()
  }, [currentPage, total])

  const handleCurrentPage = (num: number) => {
    if (num < 1 || num > total) {
      return
    }
    setCurrentPage(num)
    props.onChange && props.onChange(num)
  }

  return (
    <section className="flex gap-2">
      {currentPage !== 1 && (
        <Button onClick={() => handleCurrentPage(currentPage - 1)}>
          <MdOutlineArrowBackIosNew />
        </Button>
      )}

      {paginationCenter.map((item, index) => (
        <Button
          key={index}
          onClick={() =>
            typeof item !== 'string' && item !== currentPage
              ? handleCurrentPage(item)
              : null
          }
          className={clsx(
            item === currentPage && '!bg-blue-500 text-white hover:bg-blue-500',
          )}
        >
          {item}
        </Button>
      ))}
      {![total].includes(currentPage) && (
        <Button onClick={() => handleCurrentPage(currentPage + 1)}>
          <MdOutlineArrowForwardIos />
        </Button>
      )}
    </section>
  )
}

const Button: FC<PropsWithChildren & HTMLProps<HTMLButtonElement>> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button
      className={clsx(
        'bg-gray-100 h-9 w-9 rounded-md hover:bg-gray-200 flex justify-center items-center cursor-pointer dark:bg-black',
        className,
      )}
      onClick={onClick}
      aria-label="pagination"
    >
      {children}
    </button>
  )
}

export default memo(Pagination)
