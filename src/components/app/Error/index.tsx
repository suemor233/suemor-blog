import type { NextPage } from 'next'
export const ErrorView: NextPage<{
  noSeo?: boolean
  statusCode: number | string
  description?: string | JSX.Element
}> = ({ statusCode = 500, description, noSeo = false }) => {
  return (
    <>
      <div className="h-screen flex justify-center items-center phone:flex-col">
        <h1 className="border-r-1 phone:border-none border-gray-3 px-6 py-3 mr-6">
          {statusCode}
        </h1>
        <div>{description}</div>
      </div>
    </>
  )
}

