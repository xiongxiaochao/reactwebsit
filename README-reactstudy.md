知识点1：通过父元素给子元素传值：在父元素里面设置：属性value(i),在子元素里面接收通过this.props.value

知识点2：在子元素里面设置点击事件： onClick={function(){alert('click');  在子元素里面点击每个元素的时候，都会跳出一个弹框。。。 
<!-- 为了使用方便，我们使用箭头函数：onClick={() => alert('click')}   -->

知识点3：当你在哪一个组件设置state的时候：你可以通过this.state.value来调用，可以通过this.setState来修改数据

知识点4：当你遇到需要同时获取多个子组件数据，或者两个组件之间需要相互通讯的情况时，需要把子组件的 state 数据提升至其共同的父组件当中保存。之后父组件可以通过 props 将状态数据传递到子组件当中。这样应用当中所有组件的状态数据就能够更方便地同步共享了

知识点5：当要改变父元素传到子元素的数据时候，我们在父元素写好事件，而后通过传到子元素的方法进行改变。。。
        eg:父元素：
                <!-- handleClick(i) {
                const squares = this.state.squares.slice();
                squares[i] = 'X';
                this.setState({
                    squares: squares
                })
            }

                renderSquare(i) {
                return (
                    <Square 
                        value={this.state.squares[i]}
                        onClick={() => this.handleClick(i)}    
                    ></Square >
                )
      
            }

        子元素：class Square extends React.Component {
                    render() {
                        return (
                            <button className="square" onClick={
                                ()=> this.props.onClick()
                            }>
                                {this.props.value}
                            </button>
                         );
                        }
                    }

知识点6： 为了控制状态，我们每走一步，我们在父元素state里面设置一个状态，状态得目的就是当棋子每走一步的时候，我们可以知道对于的操作是那个，

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  接下来修改 Board 组件 render 方法中 “status” 的值，这样就可以显示下一步是哪个玩家的了

render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      // 其他部分没有改变


知识点7： 
/*修改数据的方法：
        直接修改数据
        var player = { score: 1, name: 'Jeff'};
        player.score = 2;
        //player 修改后的值为 {score: 2, name: 'Jeff'}

        新数据替换旧数据
        var  player = {score: 1, name: 'Jeff'}；

        var newPlayer = Object.assign({}, player, {score: 2});
        //player的值没有改变，但是newPlayer的值是{score: 2, name: 'Jeff'}

        //使用对象展开语法，就可以写成
        //var newPlay = {...player, score: 2};
*/