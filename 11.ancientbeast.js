(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{310:function(e,t,r){"use strict";r.r(t);var a=r(112),i=r(26),n=r(42),s=r(10),u=r(113);t.default=function(e){e.abilities[4]=[{trigger:"onStartPhase",require:function(){return this.testRequirements()},activate:function(){this._addTrap(this.creature.hexagons[1]),this._addTrap(this.creature.hexagons[this.creature.player.flipped?0:2]),e.Phaser.add.audio("MagmaSpawn0").play()},_addTrap:function(t){var r=this,i=this.isUpgraded()?0:1;t.createTrap("scorched-ground",[new u.a(this.title,this.creature,t,"onStepIn",{requireFn:function(){return!!this.trap.hex.creature&&this.trap.hex.creature.id!==r.creature.id},effectFn:function(t,i){i.takeDamage(new a.a(t.attacker,r.damages,1,[],e),{isFromTrap:!0}),this.trap.destroy(),t.deleteEffect()},attacker:this.creature},e)],this.creature.player,{turnLifetime:i,ownerCreature:this.creature,fullTurnLifetime:!0})}},{trigger:"onQuery",_lastTargetId:-1,_targetTeam:i.a.enemy,require:function(){return!!this.testRequirements()&&!!this.atLeastOneTarget(this.creature.getHexMap(n.j),{team:this._targetTeam})},query:function(){var t=this,r=this.creature;e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:r.id,flipped:r.flipped,hexes:this.creature.getHexMap(n.j)})},activate:function(t){var r;this.end();var i={burn:this.damages.burn,crush:this.damages.crush},n=0;for(r=0;r<t.effects.length;r++)t.effects[r].name===this.title&&t.effects[r].owner===this.creature&&n++;i.burn+=n*this.damages.burn;var s=new a.a(this.creature,i,1,[],e);t.takeDamage(s);var c=1;for(this.isUpgraded()&&t.id===this._lastTargetId&&(c=2),this._lastTargetId=t.id,r=0;r<c;r++)t.addEffect(new u.a(this.title,this.creature,t,"",{deleteTrigger:"",stackable:!0},e))}},{trigger:"onQuery",map:[[0,0,1,0],[0,0,1,1],[1,1,1,0],[0,0,1,1],[0,0,1,0]],require:function(){return this.testRequirements()},query:function(){var t=this,r=this.creature;this.map.origin=[0,2],e.grid.queryChoice({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:i.a.both,requireCreature:0,id:r.id,flipped:r.flipped,choices:[r.getHexMap(this.map),r.getHexMap(this.map,!0)]})},activate:function(e){var t=this;t.end();for(var r=t.getTargets(e),a=0;a<r.length;a++)if(r[a].target===this.creature){r.splice(a,1);break}t.areaDamage(t.creature,t.damages1,[],r),this.isUpgraded()&&e.forEach((function(e){e.creature&&e.creature!==t.creature||t.creature.abilities[0]._addTrap(e)}))}},{trigger:"onQuery",directions:[0,1,0,0,1,0],_targetTeam:i.a.enemy,require:function(){if(!this.testRequirements())return!1;if(!this.creature.stats.moveable)return this.message=e.msg.abilities.notMoveable,!1;var t=this.creature,r=t.player.flipped?t.x-t.size+1:t.x;return!!this.testDirection({team:this._targetTeam,x:r,directions:this.directions})},query:function(){var t=this,r=this.creature,a=r.player.flipped?r.x-r.size+1:r.x;e.grid.queryDirection({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:r.id,requireCreature:!0,x:a,y:r.y,directions:this.directions})},activate:function(t,r){var n=this,u=this.creature;n.end(!1,!0);for(var c=new a.a(n.creature,n.damages,1,[],e),h=0;h<this.creature.hexagons.length;h++)this.creature.hexagons[h].trap&&this.creature.hexagons[h].destroyTrap();!function t(a){var h=s.d(a).creature,o=u.hexagons[4===r.direction?u.size-1:0];s.b(a,!1,!1),a.unshift(o);var d=s.d(a),f=d.x+(4===r.direction?u.size-1:0);d=e.grid.hexes[d.y][f],u.moveTo(d,{ignoreMovementPoint:!0,ignorePath:!0,callback:function(){a.forEach((function(e){e.trap&&e.destroyTrap()}));var o=!1;void 0!==h&&(o=h.takeDamage(c,!0).kill);var d=!1;if(n.isUpgraded()&&o){var f=e.grid.getHexLine(h.x,h.y,r.direction,!1);s.b(f,!0,!0,u.id);var g=s.d(f).creature;g&&Object(i.b)(u,g,n._targetTeam)&&(d=!0,t(f))}if(!d)var p=setInterval((function(){e.freezedInput||(clearInterval(p),e.UI.selectAbility(-1),e.activeCreature.queryMove())}),100)}})}(t)}}]}}}]);