'use strict'

function copyToClipboard(text) {
	const input = document.createElement('input');
	input.style.position = 'absolute';
	input.style.opacity = 0;
	input.value = text;
	document.body.appendChild(input);
	input.select();
	document.execCommand('Copy');
	document.body.removeChild(input);
}

function showCopyMessage(text, button) {
	const msg = document.createElement('div')
	msg.classList.add('_jira-copy-message_')
	button.appendChild(msg)
	msg.innerText = 'Copied: '+ text
	setTimeout(() => {
		button.removeChild(msg)
	}, 1000)
}

function initCopy() {
	const header = document.querySelector('.aui-page-header-main')
	if (!header) return
	const issue = header.querySelector('.issue-link')
	const descr = header.querySelector('#summary-val')
	if (!issue || !descr) return

	const button = document.createElement('div')
	button.classList.add('_jira-copy-button_')
	header.querySelector('.aui-nav').appendChild(button)
	const text = issue.innerText + ' ' + descr.innerText
	button.onclick = () => {
		copyToClipboard(text)
		showCopyMessage(text, button)
	}

}

initCopy()