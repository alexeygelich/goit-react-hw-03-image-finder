import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Searchbar.module.css";

export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    handleInfinitScrollToggle: PropTypes.func.isRequired,
  };

  state = {
    value: "",
    isActiveScroll: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleChangeScroll = () => {
    this.props.handleInfinitScrollToggle();
    this.setState((prevState) => ({ isActiveScroll: !prevState.isActiveScroll }));
  };

  render() {
    const {
      Searchbar,
      SearchForm,
      SearchFormButton,
      SearchFormButtonLabel,
      SearchFormInput,
      themeSwitch,
      themeSwitchIcon,
      themeSwitchControl,
      themeSwitchToggle,
      themeSwitchTrack,
      themeSwitchMarker,
      green,
      red,
    } = styles;
    const { value, isActiveScroll } = this.state;
    return (
      <header className={Searchbar}>
        <form className={SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={SearchFormButton}>
            <span className={SearchFormButtonLabel}></span>
          </button>

          <input
            className={SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={this.handleChange}
          />
        </form>
        <div className={themeSwitch}>
          <svg className={themeSwitchIcon} role="img" aria-label="Иконка солнца">
            <use href="./images/sprite.svg#sun"></use>
          </svg>
          <div className={themeSwitchControl}>
            <input
              className={themeSwitchToggle}
              type="checkbox"
              name="theme"
              id="theme-switch-toggle"
              onChange={this.handleChangeScroll}
            />

            <label aria-hidden="true" className={themeSwitchTrack} htmlFor="theme-switch-toggle"></label>
            <div aria-hidden="true" className={themeSwitchMarker}></div>
          </div>
          <svg className={themeSwitchIcon} aria-label="Иконка луны">
            <use href="./images/sprite.svg#moon"></use>
          </svg>
          <span className={isActiveScroll ? green : red}>Infinit Scroll</span>
        </div>
      </header>
    );
  }
}
