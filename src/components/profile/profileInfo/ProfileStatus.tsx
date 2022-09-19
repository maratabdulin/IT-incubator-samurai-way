import React, {ChangeEvent, LegacyRef} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType> {
    statusInputRef: LegacyRef<HTMLInputElement> = React.createRef()

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        console.log(this.props.status)

        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'no status!'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            autoFocus={true}
                            onBlur={this.deactivateEditMode}
                            value={this.state.status}
                            onChange={this.onStatusChange}
                        />
                    </div>
                }
            </>
        );
    }
};

export default ProfileStatus;
