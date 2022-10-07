import { withRouter } from 'next/router'
import { useEffect, useRef } from 'react'



const ActiveLink = ({ router, href, children,exact }) => {
    let myRef = useRef(href)
// nextjs prefecth router attribute allow us to prefeth the state of router when page load
    useEffect( () => {
    (function prefetchPage () {
        if(typeof window !== 'underfined') {
            router.prefetch(router.pathname)
        }
    })()
   })


    // add click handle even to track and push new url to router
    // useEffect allow us to bypass no router intance error from next/router
    // because During Pre-rendering (SSR or SSG) access a router method like push is not support
    let handleClick;
   
   useEffect(() => {
    handleClick= (even) => {
        even.preventDefault()
        myRef.current = href
        //router.push(href)
    }
   })

    const isCurrentPath = router.pathname === href || router.asPath === href ;



    return (
        <div>
            <a href={href}  onClick={handleClick} 
                style={{
                    color : isCurrentPath ? '#fff ' : ' #14c7c7',
                    fontWeight: isCurrentPath ? 'bold' : null 
                }}>
                {children}
            </a>
        </div>
    )
}

export default withRouter(ActiveLink)