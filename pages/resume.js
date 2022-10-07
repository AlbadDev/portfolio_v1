import Resume from '../components/Resume'



const myResume = ( {resultData} ) => { 

    return (
        <Resume  resultData = {resultData} />
    )
    
}


export const getStaticProps = async () => {
    const requestData = await fetch('/api/projectInfos')
    const resultData = await requestData.json()

    return {
        props: {
            resultData
        }
    }
}


export default myResume