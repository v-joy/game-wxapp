/**
 * 游戏主体
 * @author chenxiao
 */

import BackGround from './runtime/background'
const canvas = wx.createCanvas();
let ctx = canvas.getContext('2d')
/**
 * 游戏主函数 
 */
export default class Main {
    constructor() {
      // 维护当前requestAnimationFrame的id
      this.aniId    = 0
  
      this.init()
    }
  
    init() {
      this.bg = new BackGround(ctx);
    //   this.player   = new Player(ctx)
    //   this.gameinfo = new GameInfo()
    //   this.music    = new Music()
  
    //   this.bindLoop     = this.loop.bind(this)
    //   this.hasEventBind = false
  
    //   // 清除上一局的动画
    //   window.cancelAnimationFrame(this.aniId);
  
    //   this.aniId = window.requestAnimationFrame(
    //     this.bindLoop,
    //     canvas
    //   )
    }
  
    // /**
    //  * 随着帧数变化的敌机生成逻辑
    //  * 帧数取模定义成生成的频率
    //  */
    // enemyGenerate() {
    //   if ( databus.frame % 30 === 0 ) {
    //     let enemy = databus.pool.getItemByClass('enemy', Enemy)
    //     enemy.init(6)
    //     databus.enemys.push(enemy)
    //   }
    // }
  
    // // 全局碰撞检测
    // collisionDetection() {
    //   let that = this
  
    //   databus.bullets.forEach((bullet) => {
    //     for ( let i = 0, il = databus.enemys.length; i < il;i++ ) {
    //       let enemy = databus.enemys[i]
  
    //       if ( !enemy.isPlaying && enemy.isCollideWith(bullet) ) {
    //         enemy.playAnimation()
    //         that.music.playExplosion()
  
    //         bullet.visible = false
    //         databus.score  += 1
  
    //         break
    //       }
    //     }
    //   })
  
    //   for ( let i = 0, il = databus.enemys.length; i < il;i++ ) {
    //     let enemy = databus.enemys[i]
  
    //     if ( this.player.isCollideWith(enemy) ) {
    //       databus.gameOver = true
  
    //       break
    //     }
    //   }
    // }
  
    // // 游戏结束后的触摸事件处理逻辑
    // touchEventHandler(e) {
    //    e.preventDefault()
  
    //   let x = e.touches[0].clientX
    //   let y = e.touches[0].clientY
  
    //   let area = this.gameinfo.btnArea
  
    //   if (   x >= area.startX
    //       && x <= area.endX
    //       && y >= area.startY
    //       && y <= area.endY  )
    //     this.restart()
    // }
  
    /**
     * canvas重绘函数
     * 每一帧重新绘制所有的需要展示的元素
     */
    render() {
      this.bg.render(ctx);
    }
}