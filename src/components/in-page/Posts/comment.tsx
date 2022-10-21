import InputArea from "./input-area"

export const Comment = () => {
  return (
    <div className="col-span-2 phone:col-span-1 flex flex-col gap-4 mt-5 dark:border-gray-600 bg-white">
    <h1 className="font-ui text-xl border-l-blue-500 border-l-3 pl-2">
      评论
    </h1>
    <InputArea />
  </div>
  )
}
