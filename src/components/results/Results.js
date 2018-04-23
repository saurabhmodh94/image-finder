import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import IconButton from "material-ui/IconButton";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
import Dialog from 'material-ui/Dialog';
class Results extends Component {
    render() {
        let renderContent;
        const { imgList } = this.props;
        renderContent = imgList ?
            <GridList cols={3}>
                {imgList.map(
                    img =>
                        <GridTile
                            key={img.id}
                            title={img.tags}
                            subtitle={<span>by <b>{img.user}</b></span>}
                            actionIcon={<IconButton><ZoomIn color="white" /></IconButton>}
                        >
                            <img src={img.webformatURL} alt="" />
                        </GridTile>
                )}
            </GridList> : null;

        return (
            <div>{renderContent}</div>

        )
    }
}
Results.propTypes = {
    imgList: PropTypes.array.isRequired
}
export default Results;