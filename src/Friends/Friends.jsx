import React from 'react'

export default function Friends() {
  return (
    <div>
        <h1 className="title is-2">Friends</h1>
        <h3 className="subtitle is-3">No friends? </h3>
        <button className="addfriend" onClick='#'>
            Add a Friend!
        </button>
        <div class="modal">
  <div class="modal-background"></div>
  <div class="modal-content">
   <h3 className="title is-4">Who do you want to add?</h3>
  </div>
  <button class="modal-close is-large" aria-label="close"></button>
</div>
    </div>
  )
}
