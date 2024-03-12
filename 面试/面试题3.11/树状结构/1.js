// 后端返回的就是列表项 select * 
// 前端要自行转数形结构 
const list = [
    {
      id: 1001,
      parentId: 0,
      name: "AA",
    },
    {
      id: 1002,
      parentId: 1001,
      name: "BB",
    },
    {
      id: 1003,
      parentId: 1001,
      name: "CC",
    },
    {
      id: 1004,
      parentId: 1003,
      name: "DD",
    },
    {
      id: 1005,
      parentId: 1003,
      name: "EE",
    },
    {
      id: 1006,
      parentId: 1002,
      name: "FF",
    },
    {
      id: 1007,
      parentId: 1002,
      name: "GG",
    },
    {
      id: 1008,
      parentId: 1004,
      name: "HH",
    },
    {
      id: 1009,
      parentId: 1005,
      name: "II",
    },
  ];
  
  // 暴力解法
  function listToSimpleTree(data) {
      const res = [];
  
      data.forEach(item => {
        //寻找父节点
          const parent = data.find(node => node.id === item.parentId);
          
          if (parent) {
              parent.children = parent.children || [];
              parent.children.push(item)
          } else {
              // 一级结点
              res.push(item);
          }
      })
  
      return res;
  }
  
  console.log(listToSimpleTree(list))
  
  // 优化时间复杂度 用空间换时间 
  function listToTree(data) {
      // 空间换时间
      const obj = {}
      // 当数据项很庞大的时候， 中国的地市 
      // O(1) 查找 ,表的读取为O(1)
      data.forEach((item) => {
          obj[item.id] = item
      })
  
      const res = [];
      
      data.forEach(item => {
        const parent = obj[item.parentId];
        if (parent) {
          parent.children = parent.children || [];
          parent.children.push(item); 
        } else {
          res.push(item);
        }
      })
  
      return res
      // console.time
      // cosole.timeEnd()
  }
  
  console.time("原始方法")
  const resSimple = listToSimpleTree(list);
  console.log(resSimple)
  console.timeEnd("原始方法")
  
  console.time("HashMap方法")
  const resSimple2 = listToTree(list);
  console.log(resSimple2)
  console.timeEnd("HashMap方法")
