const bind = (_this, statePath) => ({
    value: _this.state[statePath] == null ? '' : _this.state[statePath],
    onChange: e => _this.setState({ [statePath]: e.target.value })
});

export { bind };
