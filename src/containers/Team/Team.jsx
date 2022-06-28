import React from 'react'
import Employee from '../../components/employee/Employee'
import './team.css'
import images from '../../constants/images'

const Team = () => {
  return (
    <div className="app__team-container">
      <h1 className="app__team-heading">Our Team</h1>
      <div className="app__team-members">
        <Employee image={images.image2} name="Steven" bio="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis libero in est quos ipsa ullam, nam id aspernatur cupiditate consequatur iusto eos, labore ex esse inventore veniam ea aliquam asperiores." position="CEO"/>
        <Employee image={images.image31} name="Jane" bio="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis libero in est quos ipsa ullam, nam id aspernatur cupiditate consequatur iusto eos, labore ex esse inventore veniam ea aliquam asperiores." position="Senior Agent"/>
        <Employee image={images.image32} name="Marcus" bio="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis libero in est quos ipsa ullam, nam id aspernatur cupiditate consequatur iusto eos, labore ex esse inventore veniam ea aliquam asperiores." position="Junior Agent"/>
        <Employee image={images.image33} name="Anne" bio="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis libero in est quos ipsa ullam, nam id aspernatur cupiditate consequatur iusto eos, labore ex esse inventore veniam ea aliquam asperiores." position="Senior Agent"/>
      </div>
    </div>
  )
}

export default Team
