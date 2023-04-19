import React, { useState, useContext } from 'react'
import * as intentsAPI from '../../../utilities/intents-api'
import { IntentContext } from '../IntentComp'

export default function Intent({intent, setUpdate}) {

 // useContext located in '../IntentComp' to re-render useEffect (reload data)
 const {pageReload, setPageReload} = useContext(IntentContext)

  async function deleteOne(evt){
      evt.preventDefault()
      setPageReload(!pageReload)
      try{
        await intentsAPI.deleteOne(intent._id)
      } catch(err){
          console.error('err', err)
      }
    }

  async function completeOne(evt){
        evt.preventDefault()
        setPageReload(!pageReload)
        try{
          await intentsAPI.completeOne(intent._id)

        } catch(err){
            console.error('err', err)
        }
    }

  return (
    <>  
        <li>
          {intent.intentDescription}
        </li>
            <form>
              <button
                  name='startTimer'

                  >start timer</button>
              <button
                  name='deleteOne'
                  value='deleteOne'
                  onClick={deleteOne}
                  >delete</button>
              <button
                  name='completeOne'
                  value='completeOne'
                  onClick={completeOne}
                  >Complete</button>
              </form>


    </>
  )
}
