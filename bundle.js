import _ from 'lodash';
import * as Mui from '@material-ui/core';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import * as colors from '@material-ui/core/colors';
// import * as MuiIcons from 'material-ui-icons';
import * as MuiIcons from '@material-ui/icons';
import { Component, createFactory, div } from '@ashwinm/dom';


var $MuiContainer;
var MuiTheme;
var additionalColors;
var fix;
var iconFix;
var key1;
var key2;
var v;
var value;
var boundMethodCheck = function(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new Error('Bound instance method accessed before binding'); } };

/*
coffeebar -Mo rollup.config.js config.coffee
coffeebar src/main.coffee
rollup src/main.js --format es --output ../material-ui/bundle.js
 */

fix = function(item) {
  if (Mui[item] != null) {
    return createFactory(Mui[item]);
  } else {
    return console.error(`# Not found in Mui: ${item} `);
  }
};

iconFix = function(item) {
  if (MuiIcons[item] != null) {
    return createFactory(MuiIcons[item]);
  } else {
    console.error(`# Not found in MuiIcons: ${item} `);
    return console.log("hi");
  }
};

var mixStyles = function(styleSheetKey, themeFunction) {
  var withStyleSheet;
  withStyleSheet = withStyles(themeFunction);
  return function(SomeComponent) {
    return createFactory(withStyleSheet(SomeComponent));
  };
};

var constantStyles = function(styleSheetKey, styleObj) {
  var themeFunction;
  themeFunction = _.constant(styleObj);
  return mixStyles(styleSheetKey, themeFunction);
};


/* @MUI_THEME */


/* @Theme */

MuiTheme = createFactory(MuiThemeProvider);

var Theme = createFactory($MuiContainer = class $MuiContainer extends Component {
  constructor() {
    super(...arguments);
    this.render = this.render.bind(this);
  }

  render() {
    boundMethodCheck(this, $MuiContainer);
    return MuiTheme({}, this.props.children);
  }

});


/* @generateColor */

additionalColors = {};

for (key1 in colors) {
  value = colors[key1];
  for (key2 in value) {
    v = value[key2];
    additionalColors[`${key1}${key2}`] = v;
  }
}


/* @STANDARD_IMPORTS */


/* @Colors */

var Colors = Object.assign({}, colors, additionalColors);


/* @Card */

var Card = fix("Card");

var CardHeader = fix("CardHeader");

var CardActions = fix("CardActions");

var CardContent = fix("CardContent");

var CardMedia = fix("CardMedia");

var Paper = fix("Paper");


/* @Button */

var Button = fix("Button");

var IconButton = fix("IconButton");

var Checkbox = fix("Checkbox");


/* @List */

var List = fix("List");

var ListItem = fix("ListItem");

var ListItemText = fix("ListItemText");

var ListItemSecondaryAction = fix("ListItemSecondaryAction");

var ListItemIcon = fix("ListItemIcon");


/* @Table */

var Table = fix("Table");

var TableBody = fix("TableBody");

var TableRow = fix("TableRow");

var TableCell = fix("TableCell");


/* @Tab */

var Tab = fix("Tab");

var Tabs = fix("Tabs");


/* @Navigation */

var AppBar = fix("AppBar");

var Toolbar = fix("Toolbar");

var Drawer = fix("Drawer");


/* @Menu */

var Menu = fix("Menu");

var MenuItem = fix("MenuItem");


/* @Icons */

var MenuIcon = iconFix("Menu");

var SearchIcon = iconFix("Search");


/* @Misc */

var Avatar = fix("Avatar");

var Badge = fix("Badge");

var Chip = fix("Chip");

var Divider = fix("Divider");

var DropDownMenu = fix("DropDownMenu");

var Grid = fix("Grid");

var Snackbar = fix("Snackbar");

var TextField = fix("TextField");

var Input = fix("Input");

var Typography = fix("Typography");


/* @CustomComponents */

var FlatButton = function(props, ...children) {
  var label;
  ({label} = props);
  return Button(props, label);
};

var RaisedButton = function(props, ...children) {
  var label;
  ({label} = props);
  return Button(props, label);
};

var CardTitle = mixStyles("CardTitle", (theme) => {
  return {
    pos: {
      marginBottom: 4,
      color: theme.palette.text.secondary
    },
    cardTitle: {
      paddingLeft: 16,
      paddingTop: 4,
      paddingRight: 8,
      paddingBottom: 4
    }
  };
})(function(props, ...children) {
  var cardTitle, classes, pos, style, subtitle, subtitleStyle, title, titleStyle;
  ({title, subtitle, titleStyle, subtitleStyle, style, classes} = props);
  ({cardTitle, pos} = classes);
  return div({
    className: cardTitle,
    style: style != null ? style : {}
  }, title != null ? Typography({
    type: "headline",
    component: "h2",
    style: titleStyle != null ? titleStyle : {}
  }, title) : void 0, subtitle != null ? Typography({
    type: "body1",
    className: pos,
    style: subtitleStyle != null ? subtitleStyle : {}
  }, subtitle) : void 0);
});

var Subheader = mixStyles("Subheader", (theme) => {
  return {
    title: {
      marginLeft: 16,
      marginTop: 12,
      marginRight: 12,
      marginBottom: 12,
      fontWeight: "bold",
      fontSize: 14,
      color: theme.palette.text.secondary
    }
  };
})(function({
    label,
    classes: {title}
  }, ...children) {
  return Typography({
    type: "body1",
    className: title,
    gutterBottom: true
  }, label);
});

var ShadedRegion = function({elevation, background}, ...children) {
  return Paper({
    elevation: elevation != null ? elevation : 0,
    style: {
      background: background != null ? background : Colors.grey[200],
      paddingTop: 12
    }
  }, ...children);
};

var WrapRegion = function({title, style = {}}, ...children) {
  return ShadedRegion({}, CardTitle({
    title,
    style: Object.assign({
      marginBottom: -12
    }, style)
  }), CardContent({}, ...children));
};

var GridContainer = function(props, ...children) {
  return Grid(Object.assign({
    container: true
  }, props), ...children);
};

var GridItem = function(props, ...children) {
  return Grid(Object.assign({
    item: true
  }, props), ...children);
};

var Row = function(props, ...children) {
  return div({
    style: Object.assign({
      paddingBottom: 12,
      paddingLeft: 8,
      paddingRight: 8
    }, props.style)
  }, GridContainer({}, ...children));
};

var Col = function(props, ...children) {
  var l, m, ref, ref1, ref2, s, style, xl, xs;
  ({xs, s, m, l, xl, style} = props);
  return GridItem({
    xs: xs != null ? xs : s,
    sm: s,
    md: m != null ? m : s,
    lg: (ref = l != null ? l : m) != null ? ref : s,
    xl: (ref1 = (ref2 = xl != null ? xl : l) != null ? ref2 : m) != null ? ref1 : s,
    style: style != null ? style : {}
  }, div({
    style: {
      marginLeft: 0,
      marginRight: 0
    }
  }, ...children));
};

var ChipZone = function({style}, ...children) {
  return div({
    style: Object.assign({
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }, style)
  }, ...children);
};

export { mixStyles, constantStyles, Theme, Colors, Card, CardHeader, CardActions, CardContent, CardMedia, Paper, Button, IconButton, Checkbox, List, ListItem, ListItemText, ListItemSecondaryAction, ListItemIcon, Table, TableBody, TableRow, TableCell, Tab, Tabs, AppBar, Toolbar, Drawer, Menu, MenuItem, MenuIcon, SearchIcon, Avatar, Badge, Chip, Divider, DropDownMenu, Grid, Snackbar, TextField, Input, Typography, FlatButton, RaisedButton, CardTitle, Subheader, ShadedRegion, WrapRegion, GridContainer, GridItem, Row, Col, ChipZone, MuiIcons };
export default Mui;
