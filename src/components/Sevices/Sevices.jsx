import React from 'react'
import styles from './Sevices.module.css'
import { FaCode, FaPaintbrush, FaDesktop  } from "react-icons/fa6";

function Sevices() {
  return (
    <div className={styles.sevices_con}>
        <h3 className={styles.sevices_title}>My Services</h3>
        <div className={styles.sevices_list}>
            <div className={styles.sevices_items}>
                <FaCode />
                <h4>Web Development</h4>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.
                </p>
            </div>
            <div className={styles.sevices_items}>
                <FaPaintbrush />
                <h4>Web Design</h4>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.
                </p>
            </div>
            <div className={styles.sevices_items}>
                <FaDesktop />
                <h4>Front-end Consulting</h4>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default Sevices
