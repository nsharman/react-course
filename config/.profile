# ~/.profile: executed by the command interpreter for login shells.
# This file is not read by bash(1), if ~/.bash_profile or ~/.bash_login
# exists.
# see /usr/share/doc/bash/examples/startup-files for examples.
# the files are located in the bash-doc package.

# the default umask is set in /etc/profile; for setting the umask
# for ssh logins, install and configure the libpam-umask package.
#umask 022

git_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

# Define colors
export CYAN='\e[0;36m'
export PURPLE='\e[0;35m'
export GREEN='\e[0;32m'

# Setup terminal profile
export PS1="\n\[${CYAN}\]\w\[${PURPLE}\]\$(git_branch)\[${GREEN}\]\n> "

# Setup terminal colors
set TERM xterm-256color; export TERM
export CLICOLOR=1
export LSCOLORS=ExFxBxDxCxegedabagacad # defines nicer colors for the LS command

# if running bash
if [ -n "$BASH_VERSION" ]; then
    # include .bashrc if it exists
    if [ -f "$HOME/.bashrc" ]; then
	. "$HOME/.bashrc"
    fi
fi

# set PATH so it includes user's private bin if it exists
if [ -d "$HOME/bin" ] ; then
    PATH="$HOME/bin:$PATH"
fi
