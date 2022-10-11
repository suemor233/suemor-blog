import type { NextPage } from "next"
import { SEO } from "~/components/biz/Seo"
import Archives from "~/components/in-page/Archives";
import ArchiveLayout from "~/components/layouts/ArchiveLayout"
import type { AllArchiveType } from '../../api/modules/archive';
import { allArchiveRequest } from '../../api/modules/archive';

const ArchivesView:NextPage<AllArchiveType> = (archives) => {
  
  return (
    <>
        <SEO title='归档'/>
       <ArchiveLayout archives={archives}>
          <Archives/>
       </ArchiveLayout>
    </>
 
  )
}

ArchivesView.getInitialProps = async()=> {
    const archives = await allArchiveRequest()
    return archives
}

export default ArchivesView