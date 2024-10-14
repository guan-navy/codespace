import "./Jsx.css";
const songs = [
  { id: 1, name: "泸州月" },
  { id: 2, name: "夜雨声烦" },
  { id: 3, name: "夜雨声烦" },
  { id: 4, name: "夜雨声烦" },
];
let flag = false;
const styleObj = {
  color: "blue",
  fontSize: "20px",
};
//根组件
function App() {
  return (
    <div className="app">
      <h1>Hello React</h1>
      <h2>这里的html当中只能有一个节点div,而且该div标签能够写成空节点</h2>
      <ul>
        <li>循环渲染列表</li>
        {songs.map((song) => (
          <li key={song.id}>{song.name}</li>
        ))}
      </ul>
      <h3>{flag ? "true" : "false"}</h3>
      <h2 style={{ color: "red" }}>
        使用行内样式第一个花括号是表示js语法开辟空间，第二个花括号是js对象
      </h2>
      <h2 style={styleObj}>使用样式对象</h2>
      <h2 className="green">引入外部样式,需要使用import引入语句</h2>
    </div>
  );
}
export default App;
