import { withRouter } from 'next/router'
import { useEffect } from 'react'



const ActiveLink = ({ router, href, children }) => {

    // nextjs prefecth router attribute allow us to prefeth the state of router when page load
    useEffect( () => {
    (function prefetchPage () {
        if(typeof window !== 'underfined') {
            router.prefetch(router.pathname)
        }
    })()
   })
   let handleClick ;
    // add click handle even to track and push new url to router
   useEffect(() => {
    handleClick= (even) => {
        even.preventDefault()
        router.push(href)
    }
   })

    const isCurrentPath = router.pathname === href || router.asPath === href;



    return (
        <div>
            <a href={href} onClick={handleClick} style={{
                color : isCurrentPath ? ' #14c7c7' : '#fff',
                fontWeight: isCurrentPath ? 'bold' : null 
                
            }}>
                {children}
            </a>
        </div>
    )
}

export default withRouter(ActiveLink)