class toolbarEvent {
    constructor(){

    }
    locked(tableData){
        console.log('锁定');
        console.log(tableData)
    }
    unlock(tableData){
        console.log('解锁');
        console.log(tableData)
    }
    upload(tableData){
        console.log('上传');
        console.log(tableData)
    }
    save(tableData){
        console.log('保存');
        console.log(tableData)
        console.log(JSON.stringify(tableData))
    }
    preview(tableData){
        console.log('预览');
        console.log(JSON.stringify(tableData));
    }
    share(tableData){
        console.log('分享');
        console.log(tableData)
    }
    tablesetting(tableData){
        console.log('表格设置');
        console.log(tableData)
    }
    tableValidate(tableData){
        console.log('表格校验');
        console.log(tableData)
    }
}
export default new toolbarEvent