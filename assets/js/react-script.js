//TODO: ADD EMAIL AND LINKEDIN ICONS
//TODO: ADD OPTION FOR EXEC POSITION

var Member = React.createClass({
  render: function() {
    return (
      <div className="brother">
        <div className='brother-img-container'>
          <img
            src={'assets/images/brothers/' + this.props.firstname.toLowerCase() + this.props.lastname.toLowerCase() + '.jpg'}
            className='img-responsive center-block'
          />
          <div className="brother-img-overlay"></div>
        </div>

        <p className="brothers-caption text-uppercase text-center">{this.props.firstname} {this.props.lastname}</p>
        <p className="brothers-subcaption text-center">{this.props.major} | {this.props.year}</p>

      </div>
    );
  }
});

var LetterClass = React.createClass({
  getInitialState: function() {
    return { items: [] }
  },
  render: function() {
    var items =
      this.props.members ? this.props.members.map(function(member){
        return member.notPictured ? null : (
          <Member
            firstname={member.firstname}
            lastname={member.lastname}
            major={member.major}
            year={member.year}
            linkedin={member.linkedin}
            email={member.email}
            execposition={member.execposition ? member.execposition : null}
          />
        );
      }) : null;
    var notPictured =
        this.props.members ? this.props.members.filter(function(member){
          return member.notPictured;
        })
        .map(function(member){
          return member.firstname + " " + member.lastname;
        })
        .join(", ") : null;
    var notPicturedDiv =
        this.props.members ? (<div className="not-pictured">Not pictured: {notPictured}</div>) : null;
    return (
      <div className="brothers-container">
        <div className="brothers-class-title">{this.props.letter.toUpperCase()} CLASS</div>
        {items}
        <div className="brother-spacer"></div>
        <div className="brother-spacer"></div>
        <div className="brother-spacer"></div>
        <div className="brother-spacer"></div>
        {notPicturedDiv}
      </div>
    );
  }
});

var LetterClasses = React.createClass({
  getInitialState: function() {
    return { items: [] }
  },
  render: function() {
    var items =
      this.props.classes.map(function(letterclass){
        return (
          <LetterClass letter={letterclass.letter} members={letterclass.members} />
        );
      });
    return (
      <div className="classes-container">
        {items}
      </div>
    );
  }
});

ReactDOM.render(
  <LetterClasses classes={membersclasses} />,
  document.getElementById('brothers')
);
