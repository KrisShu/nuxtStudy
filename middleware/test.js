export default ({store,route,redirect,params,query})=>{
    // 可做路由首页
    console.log('middleware')
    if(route.name === 'pageB'){
        redirect('/pageA')
    }
}