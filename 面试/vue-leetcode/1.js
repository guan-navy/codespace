// patch的过程,我们有哪些改变要收集呢
// patchFlag 变量 响应式业务生成的
if(patchFlag&&PatchFlags.CALSS){
    if(oldProps.class!==newProps.class){
        hotPatchProp(el,'class',null,newProps.class,isSVG)
    }
    
}