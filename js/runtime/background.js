/*
 * @file: 背景设置
 * @author: Chen Xiao
 * @Date: 2020-01-26 21:04:05
 */
import Sprite from '../base/sprite'

const screenWidth  = window.innerWidth
const screenHeight = window.innerHeight

const BG_IMG_SRC   = 'img/grass.jpeg'

/**
 * 游戏背景类
 * 提供update和render函数实现无限滚动的背景功能
 */
export default class BackGround extends Sprite {
  constructor(ctx) {
    super(BG_IMG_SRC, screenWidth, screenHeight)
    this.render(ctx)
  }

  /**
   * 背景图重绘函数
   */
  render(ctx) {
    this.drawToCanvas(ctx);
  }
}
