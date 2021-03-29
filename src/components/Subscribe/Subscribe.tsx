import React from 'react'
import './subscribe.scss'

const Subscribe = () => (
    <form
        style={{border: '1px solid #ccc', borderRadius: '12ox', padding: '20px 40px', backgroundColor: '#fff2da', marginBottom: '40px', 'textAlign': 'center' }}
        action="https://tinyletter.com/ryro"
        method="post" target="popupwindow"
        onSubmit={() => {
            window.open('https://tinyletter.com/ryro', 'popupwindow', 'scrollbars=yes,width=800,height=600')
            return true
        }}
    >
        <p>
            <label htmlFor="tlemail">Subscribe for bi-weekly learnings and ideas</label>
        </p>
        <p>
            <input className='inputbox' type="text" style={{ width: '140px' }} name="email" id="tlemail"/>
        </p>
        <input type="hidden" value="1" name="embed"/>
        <input className='button' type="submit" value="Subscribe"/>
    </form>

)

export default Subscribe
