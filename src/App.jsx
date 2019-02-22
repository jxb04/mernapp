const contentNode = document.getElementById('contents');

const issues = [
    {
        id: 1, status: 'Open', owner: 'Ravan',
        created: new Date('2019-02-22'), effort: 5, completionDate: undefined,
        title: 'Error in console when clicking Add',
    },
    {
        id: 2, status: 'Assigned', owner: 'Eddie',
        created: new Date('2019-02-21'), effort: 14, completionDate: new Date('2019-02-22'),
        title: 'Missing bottom border on panel',
    },
];

class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the Issue Filter.</div>
        )
    }
}

class IssueRow extends React.Component {
    render() {
        const borderedStyle = {border: "1px solid silver", padding: 4};
        return (
            <tr>
                <td style={borderedStyle}>{this.props.issue_id}</td>
                <td style={borderedStyle}>{this.props.children}</td>
            </tr>
        )
    }
}

class IssueTable extends React.Component {
    render() {
        const borderedStyle = {border: "1px solid silver", padding: 6};
        return (
            <table style={{borderCollapse: "collapse"}}>
                <thead>
                    <tr>
                        <th style={borderedStyle}>Id</th>
                        <th style={borderedStyle}>Title</th>
                    </tr>
                </thead>
                <tbody>
                    <IssueRow issue_id={1}>Error in console when clicking Add</IssueRow>
                    <IssueRow issue_id={2}>Missing bottom border on panel</IssueRow>
                </tbody>
            </table>
        )
    }
}

class IssueAdd extends React.Component {
    render() {
        return (
            <div>This is a placeholder for an Issue Add entry form.</div>
        )
    }
}

class IssueList extends React.Component {
    render() {
        return (
            <div>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable />
                <hr />
                <IssueAdd />
            </div>
        );
    }
}

ReactDOM.render(<IssueList />, contentNode);   // Render the component inside the content Node