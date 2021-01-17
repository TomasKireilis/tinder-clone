import React from 'react'
import "./SwipeButtons.css"
import ReplayIcon from "@material-ui/icons/Replay"
import CloseIcon from "@material-ui/icons/Close"
import StarRateIcon from "@material-ui/icons/StarRate"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FlashOnIcon from "@material-ui/icons/FlashOn"
import IconButton from "@material-ui/core/IconButton"
export default function SwipeButtons() {
    return (
        <div className="SwipeButtons">
            <IconButton className ="SwipeButton_repeat">
                <ReplayIcon fontSize="inherit"/>
            </IconButton>
            <IconButton className ="SwipeButton_left">
                <CloseIcon fontSize="inherit"/>
            </IconButton>
            <IconButton className ="SwipeButton_star">
                <StarRateIcon fontSize="inherit"/>
            </IconButton>
            <IconButton className ="SwipeButton_right">
                <FavoriteIcon fontSize="inherit"/>
            </IconButton>
            <IconButton className ="SwipeButton_lightning">
                <FlashOnIcon fontSize="inherit"/>
            </IconButton>
        </div>
    )
}
