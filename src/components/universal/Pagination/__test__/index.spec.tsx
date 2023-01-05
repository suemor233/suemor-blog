// import { fireEvent, render } from '@testing-library/react'
import React from 'React'
import { describe, expect, it } from 'vitest'

import { render, screen ,fireEvent} from '@testing-library/react'

import Pagination from '..'

const PaginationProps = {
  total: 10,
  initialPage: 1,
}
describe('Pagination', () => {
  it('pagination should be init correctly', () => {
    render(<Pagination {...PaginationProps} />)
    const selectPagination = document.querySelector('.text-white')
    const totalPagination = screen.getAllByRole('button', {
      name: 'pagination',
    })

    expect(selectPagination?.innerHTML).toBe(`${PaginationProps.initialPage}`)
    expect(totalPagination[4].innerHTML).toBe(`${PaginationProps.total}`)
    expect(selectPagination).toMatchSnapshot()
  })

  it('pagination should be unmount correctly', () => {
    const component = render(<Pagination {...PaginationProps} />)
    expect(() => {
      component.unmount()
    }).not.toThrow()
  })

  it('pagination should jump correctly pages',()=> {
    render(<Pagination {...PaginationProps} />)
    const totalPagination = screen.getAllByRole('button', {
      name: 'pagination',
    })
    fireEvent.click(totalPagination[2])
    expect(totalPagination[2].innerHTML).toBe('3')
  })

  it('pagination snapshot', () => {
    const component = render(<Pagination {...PaginationProps} />)
    expect(component).toMatchSnapshot()
  })
})
