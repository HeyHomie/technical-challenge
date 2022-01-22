import { Button } from '../..'

export function RepositoryItemSkeleton() {
  return (
    <div className="py-6 border-b border-[#d8dee4] dark:border-[#373e47] grid grid-cols-12">
      <div className="col-span-9">
        <h3 className="mb-1 text-xl break-all">
          <span className="inline-block h-[22px] w-[200px] bg-[#f1f1f1]  dark:bg-[#768390] rounded-full"></span>
        </h3>
        <div className="mb-2">
          <span className="inline-block h-[12px] w-[280px] bg-[#f3f4f6] dark:bg-[#6e7781] rounded-full"></span>
        </div>
        <div className="text-[#768390] text-xs">
          <span className="mr-4">
            <span className="inline-block h-[8px] w-[100px] bg-[#f3f4f6] dark:bg-[#768390] rounded-full"></span>
          </span>
        </div>
      </div>
      <div className="col-span-3 text-right">
        <div className="inline-flex">
          <Button noBorderRight>
            <span className="inline-block h-[8px] w-[50px] bg-[#f3f4f6] dark:bg-[#768390] rounded-full"></span>
          </Button>
          <Button noBorderLeft>
            <span className='inline-block align-middle content-[""] border-4 border-b-0 border-r-transparent border-b-transparent border-l-transparent opacity-80'></span>
          </Button>
        </div>
      </div>
    </div>
  )
}
