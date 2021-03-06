/**
 * Press the correct arrow key as it hits the hollow key and get points! If you press the key too early or if you miss, you will lose a life. The levels will get increasing difficult.
 */
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (full2 == 1) {
        if (up.overlapsWith(hollowUp)) {
            up.destroy(effects.disintegrate, 100)
            full2 = 0
            info.changeScoreBy(1)
            music.playMelody("C D E F G A B C5 ", 1250)
        } else if (up.y < 50) {
            info.changeLifeBy(-1)
            music.zapped.play()
        }
    } else {
        info.changeLifeBy(-1)
        music.zapped.play()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (full1 == 1) {
        if (left.overlapsWith(hollowLeft)) {
            left.destroy(effects.disintegrate, 100)
            full1 = 0
            info.changeScoreBy(1)
            music.playMelody("C - D - E - F - ", 1250)
        } else if (left.y < 50) {
            info.changeLifeBy(-1)
            music.zapped.play()
        }
    } else {
        info.changeLifeBy(-1)
        music.zapped.play()
    }
})
function touchWall (mySprite: Sprite) {
    if (mySprite.y >= 110) {
        mySprite.destroy()
        placeholder3 = 1
    }
}
info.onCountdownEnd(function () {
    ready = true
})
function spawnArrow () {
    if (ready) {
        if (!(full1 == 1 && (full2 == 1 && (full3 == 1 && full4 == 1)))) {
            lane = randint(1, 4)
            if (lane == 1) {
                if (full1 == 1) {
                    spawnArrow()
                } else {
                    left = sprites.create(img`
                        . . . . . . f f f . . . . . . . 
                        . . . . . f f 8 f . . . . . . . 
                        . . . . f f 8 8 f . . . . . . . 
                        . . . f f 8 8 8 f . . . . . . . 
                        . . f f 8 8 8 8 f . . . . . . . 
                        . f f 8 8 8 8 8 f f f f f f f f 
                        f f 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
                        f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
                        f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
                        f f 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
                        . f f 8 8 8 8 8 f f f f f f f f 
                        . . f f 8 8 8 8 f . . . . . . . 
                        . . . f f 8 8 8 f . . . . . . . 
                        . . . . f f 8 8 f . . . . . . . 
                        . . . . . f f 8 f . . . . . . . 
                        . . . . . . f f f . . . . . . . 
                        `, SpriteKind.Projectile)
                    arrowDirection(30, 8, left)
                    full1 = 1
                }
            } else if (lane == 2) {
                if (full2 == 1) {
                    spawnArrow()
                } else {
                    up = sprites.create(img`
                        . . . . . . f f f f . . . . . . 
                        . . . . . f f 8 8 f f . . . . . 
                        . . . . f f 8 8 8 8 f f . . . . 
                        . . . f f 8 8 8 8 8 8 f f . . . 
                        . . f f 8 8 8 8 8 8 8 8 f f . . 
                        . f f 8 8 8 8 8 8 8 8 8 8 f f . 
                        f f 8 8 8 8 8 8 8 8 8 8 8 8 f f 
                        f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
                        f f f f f f 8 8 8 8 f f f f f f 
                        . . . . . f 8 8 8 8 f . . . . . 
                        . . . . . f 8 8 8 8 f . . . . . 
                        . . . . . f 8 8 8 8 f . . . . . 
                        . . . . . f 8 8 8 8 f . . . . . 
                        . . . . . f 8 8 8 8 f . . . . . 
                        . . . . . f 8 8 8 8 f . . . . . 
                        . . . . . f f f f f f . . . . . 
                        `, SpriteKind.Projectile)
                    arrowDirection(60, 8, up)
                    full2 = 1
                }
            } else if (lane == 3) {
                if (full3 == 1) {
                    spawnArrow()
                } else {
                    down = sprites.create(img`
                        . . . . . f f f f f f . . . . . 
                        . . . . . f 8 8 8 8 f . . . . . 
                        . . . . . f 8 8 8 8 f . . . . . 
                        . . . . . f 8 8 8 8 f . . . . . 
                        . . . . . f 8 8 8 8 f . . . . . 
                        . . . . . f 8 8 8 8 f . . . . . 
                        . . . . . f 8 8 8 8 f . . . . . 
                        f f f f f f 8 8 8 8 f f f f f f 
                        f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
                        f f 8 8 8 8 8 8 8 8 8 8 8 8 f f 
                        . f f 8 8 8 8 8 8 8 8 8 8 f f . 
                        . . f f 8 8 8 8 8 8 8 8 f f . . 
                        . . . f f 8 8 8 8 8 8 f f . . . 
                        . . . . f f 8 8 8 8 f f . . . . 
                        . . . . . f f 8 8 f f . . . . . 
                        . . . . . . f f f f . . . . . . 
                        `, SpriteKind.Projectile)
                    arrowDirection(100, 8, down)
                    full3 = 1
                }
            } else {
                if (full4 == 1) {
                    spawnArrow()
                } else {
                    right = sprites.create(img`
                        . . . . . . . f f f . . . . . . 
                        . . . . . . . f 8 f f . . . . . 
                        . . . . . . . f 8 8 f f . . . . 
                        . . . . . . . f 8 8 8 f f . . . 
                        . . . . . . . f 8 8 8 8 f f . . 
                        f f f f f f f f 8 8 8 8 8 f f . 
                        f 8 8 8 8 8 8 8 8 8 8 8 8 8 f f 
                        f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
                        f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
                        f 8 8 8 8 8 8 8 8 8 8 8 8 8 f f 
                        f f f f f f f f 8 8 8 8 8 f f . 
                        . . . . . . . f 8 8 8 8 f f . . 
                        . . . . . . . f 8 8 8 f f . . . 
                        . . . . . . . f 8 8 f f . . . . 
                        . . . . . . . f 8 f f . . . . . 
                        . . . . . . . f f f . . . . . . 
                        `, SpriteKind.Projectile)
                    arrowDirection(130, 8, right)
                    full4 = 1
                }
            }
        }
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (full4 == 1) {
        if (right.overlapsWith(hollowRight)) {
            right.destroy(effects.disintegrate, 100)
            full4 = 0
            info.changeScoreBy(1)
            music.playMelody("C E A C5 C E A C5 ", 1250)
        } else if (right.y < 50) {
            info.changeLifeBy(-1)
            music.zapped.play()
        }
    } else {
        info.changeLifeBy(-1)
        music.zapped.play()
    }
})
function arrowDirection (arrowX: number, arrowY: number, arrowName: Sprite) {
    arrowName.setVelocity(0, speed)
    arrowName.setPosition(arrowX, arrowY)
    arrowName.setFlag(SpriteFlag.DestroyOnWall, false)
    arrowName.setFlag(SpriteFlag.AutoDestroy, false)
    arrowName.setFlag(SpriteFlag.StayInScreen, true)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (full3 == 1) {
        if (down.overlapsWith(hollowDown)) {
            down.destroy(effects.disintegrate, 100)
            full3 = 0
            info.changeScoreBy(1)
            music.jumpUp.play()
        } else if (down.y < 50) {
            info.changeLifeBy(-1)
            music.zapped.play()
        }
    } else {
        info.changeLifeBy(-1)
        music.zapped.play()
    }
})
info.onLifeZero(function () {
    game.over(true, effects.confetti)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprite.destroy(effects.fire, 100)
    info.changeLifeBy(-1)
})
let placeholder4 = 0
let placeholder2 = 0
let placeholder1 = 0
let right: Sprite = null
let down: Sprite = null
let lane = 0
let left: Sprite = null
let up: Sprite = null
let hollowRight: Sprite = null
let hollowDown: Sprite = null
let hollowUp: Sprite = null
let hollowLeft: Sprite = null
let speed = 0
let ready = false
let placeholder3 = 0
let full4 = 0
let full3 = 0
let full2 = 0
let full1 = 0
scene.setBackgroundColor(7)
effects.confetti.startScreenEffect()
tiles.setTilemap(tilemap`level1`)
full1 = 0
full2 = 0
full3 = 0
full4 = 0
placeholder3 = 0
let spawnSpeed = 500
ready = true
music.setVolume(20)
info.setScore(0)
info.setLife(5)
speed = 80
hollowLeft = sprites.create(img`
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 . 1 . . . . . . . 
    . . . . 1 1 . . 1 . . . . . . . 
    . . . 1 1 . . . 1 . . . . . . . 
    . . 1 1 . . . . 1 . . . . . . . 
    . 1 1 . . . . . 1 1 1 1 1 1 1 1 
    1 1 . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 1 . . . . . . . . . . . . . 1 
    . 1 1 . . . . . 1 1 1 1 1 1 1 1 
    . . 1 1 . . . . 1 . . . . . . . 
    . . . 1 1 . . . 1 . . . . . . . 
    . . . . 1 1 . . 1 . . . . . . . 
    . . . . . 1 1 . 1 . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    `, SpriteKind.Player)
hollowLeft.setPosition(30, 80)
hollowUp = sprites.create(img`
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . . 1 1 . . 1 1 . . . . . 
    . . . . 1 1 . . . . 1 1 . . . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . 1 1 . . . . . . . . 1 1 . . 
    . 1 1 . . . . . . . . . . 1 1 . 
    1 1 . . . . . . . . . . . . 1 1 
    1 . . . . . . . . . . . . . . 1 
    1 1 1 1 1 1 . . . . 1 1 1 1 1 1 
    . . . . . 1 . . . . 1 . . . . . 
    . . . . . 1 . . . . 1 . . . . . 
    . . . . . 1 . . . . 1 . . . . . 
    . . . . . 1 . . . . 1 . . . . . 
    . . . . . 1 . . . . 1 . . . . . 
    . . . . . 1 . . . . 1 . . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    `, SpriteKind.Player)
hollowUp.setPosition(60, 80)
hollowDown = sprites.create(img`
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . . 1 . . . . 1 . . . . . 
    . . . . . 1 . . . . 1 . . . . . 
    . . . . . 1 . . . . 1 . . . . . 
    . . . . . 1 . . . . 1 . . . . . 
    . . . . . 1 . . . . 1 . . . . . 
    . . . . . 1 . . . . 1 . . . . . 
    1 1 1 1 1 1 . . . . 1 1 1 1 1 1 
    1 . . . . . . . . . . . . . . 1 
    1 1 . . . . . . . . . . . . 1 1 
    . 1 1 . . . . . . . . . . 1 1 . 
    . . 1 1 . . . . . . . . 1 1 . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    . . . . 1 1 . . . . 1 1 . . . . 
    . . . . . 1 1 . . 1 1 . . . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    `, SpriteKind.Player)
hollowDown.setPosition(100, 80)
hollowRight = sprites.create(img`
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 . 1 1 . . . . . 
    . . . . . . . 1 . . 1 1 . . . . 
    . . . . . . . 1 . . . 1 1 . . . 
    . . . . . . . 1 . . . . 1 1 . . 
    1 1 1 1 1 1 1 1 . . . . . 1 1 . 
    1 . . . . . . . . . . . . . 1 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . . . . . . . . . . . . 1 1 
    1 1 1 1 1 1 1 1 . . . . . 1 1 . 
    . . . . . . . 1 . . . . 1 1 . . 
    . . . . . . . 1 . . . 1 1 . . . 
    . . . . . . . 1 . . 1 1 . . . . 
    . . . . . . . 1 . 1 1 . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    `, SpriteKind.Player)
hollowRight.setPosition(130, 80)
game.onUpdate(function () {
    if (full1 == 1) {
        if (left.y >= 110) {
            left.destroy()
            placeholder1 = 1
            info.changeLifeBy(-1)
            music.buzzer.play()
        }
        if (placeholder1 == 1) {
            full1 = 0
            placeholder1 = 0
        }
    }
    if (full2 == 1) {
        if (up.y >= 110) {
            up.destroy()
            placeholder2 = 1
            info.changeLifeBy(-1)
            music.buzzer.play()
        }
        if (placeholder2 == 1) {
            full2 = 0
            placeholder2 = 0
        }
    }
    if (full3 == 1) {
        if (down.y >= 110) {
            down.destroy()
            placeholder3 = 1
            info.changeLifeBy(-1)
            music.buzzer.play()
        }
        if (placeholder3 == 1) {
            full3 = 0
            placeholder3 = 0
        }
    }
    if (full4 == 1) {
        if (right.y >= 110) {
            right.destroy()
            placeholder4 = 1
            info.changeLifeBy(-1)
            music.buzzer.play()
        }
        if (placeholder4 == 1) {
            full4 = 0
            placeholder4 = 0
        }
    }
})
game.onUpdate(function () {
    if (info.score() % 20 == 0 && info.score() != 0) {
        game.splash("Level Complete!")
        speed += 15
        spawnSpeed += -40
        info.changeScoreBy(1)
        if (full1 == 1) {
            left.destroy()
            full1 = 0
        }
        if (full2 == 1) {
            up.destroy()
            full2 = 0
        }
        if (full3 == 1) {
            down.destroy()
            full3 = 0
        }
        if (full4 == 1) {
            right.destroy()
            full4 = 0
        }
        info.startCountdown(3)
        ready = false
    }
})
game.onUpdateInterval(spawnSpeed, function () {
    spawnArrow()
})
