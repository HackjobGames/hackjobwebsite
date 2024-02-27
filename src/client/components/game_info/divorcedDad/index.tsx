import React from 'react'

export default {
  about :
    <p>
    We made this game for the Pirate Software Game Jam 14. The concept was a game where you try to keep weeds off your lawn and keep in pristine. 
    </p>,
  howTo:
  <div>
    <h1>Introduction</h1>
    <p>
      Divorced Dad Simulator is a game about keeping a neat lawn. You control a man who is very particular about his lawn, and needs to be vigilant for any falling weeds. 
    </p>
    <h1>Controls</h1>
    <p>
    You move around the mower using WASD or the arrow keys. Space bar puts the mower into overdrive. This causes the mower to go twice as fast but consume fuel. You can see if you are sped up by looking at the turtle or rabbit icons in the upper right by the fuel gauge. Fuel has a delay before it will start to recharge, so you can't just hold down the turbo button the whole time. 
    </p>
    <h1>Enemies</h1>
    <p>
        The weeds that fall on your lawn have a few different phases.
    </p>
        <h2>Seedling</h2>
        <p> 
        These will fall to a random spot on the lawn and plant itself. The seeds are intangible in this phase,
        and they are there to indicate that a weed is about to be planted. This allows the player to plan their route when mowing the lawn.
        </p>
        <h2>Sprout</h2>
        <p>
          The seed has been planted and can now be mowed.
          When mowed they give 10 points. We wanted to give more points the earlier you mowed to incentivise the player to plan out a route as they are playing.
        </p>
        <h2>Gun</h2>
        <p>
          Gun, the seed and grown into a flower that will shoot pollen at the player.
          If the player is hit by the pollen they will be slowed down and all of the lights on their dash will start flashing. These give 5 points when mowed.
        </p>
        <h2>Fully Grown</h2>
        <p>
          The plant has fully grown and bores new seeds.
          In this phase, the plant will no longer produce pollen, and poses no threat to the player.
          However, when mowed the seeds will shoot off in three directions and plant themselves into new weeds.
          These give 2 points when mowed.
        </p>
    <h1>What We Learned</h1>
      <p>
        This game jam required the creation of a design document.
        This is something I've never made before, and I think it taught us a lot about how to actually structure the creation of a game.
        Before, we were just mindlessly working, which created aimless projects with no end goal.
      </p>
  </div>,
  name: 'divorced-dad-simulator',
  displayName: 'Divorced Dad Simulator',
  img: './images/games/DivorcedDadTitle.png',
  itchId: '9820976'
}
