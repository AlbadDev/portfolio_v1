import {projectInfo} from '../../../data'


 const handler = (req, res) => {
    const filteredProject =  projectInfo.filter(pro => pro.id === req.query.id)

        if(filteredProject.lenght > 0) {
            res.status(200).json(filteredProject)
         } else {
           res.status(404).json(filteredProject[0])
        }
        
  }
export default handler