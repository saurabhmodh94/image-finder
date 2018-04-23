import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import IconButton from "material-ui/IconButton";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
import Dialog from 'material-ui/Dialog';
class Results extends Component {
    state = {
        open: false,
    };
    handleOpen = (img) => {
        this.setState({ open: true, currentImage: img });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        let renderContent;
        const { imgList } = this.props; // good stuff here
        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onClick={this.handleClose}
            />,
        ];
        renderContent = imgList ?
            <GridList cols={3}>
                {imgList.map(
                    img =>
                        <GridTile
                            key={img.id}
                            title={img.tags}
                            subtitle={<span>by <b>{img.user}</b></span>}
                            actionIcon={
                                <IconButton onClick={() => this.handleOpen(img.largeImageURL)} >
                                    {/* Bind onClick here; otherwise infinite loop */}
                                    <ZoomIn color="white" />
                                </IconButton>
                            }
                        >
                            <img src={img.largeImageURL} alt="" />
                        </GridTile>
                )}
            </GridList>
            : null;

        return (
            <div>{renderContent}
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <img src={this.state.currentImage} alt="" style={{ width: "100%" }} />
                </Dialog>
            </div>

        )
    }
}
// props Validation: good practice
Results.propTypes = {
    imgList: PropTypes.array.isRequired
}
export default Results;