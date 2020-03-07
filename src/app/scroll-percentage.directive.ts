import { Directive, Output } from '@angular/core';
import { ElementRef } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { OnDestroy } from "@angular/core";
import { OnInit } from "@angular/core";

@Directive({
	selector: '[appScrollPercentage]',
	outputs: ["scrollPercentageEvent: scrollPercentage"]
})
export class ScrollPercentageDirective implements OnInit, OnDestroy {
	top = window.innerHeight / 2;
	scrollPercent = 0;
	private elementRef: ElementRef;
	@Output() scrollPercentageEvent: EventEmitter<number> = new EventEmitter();
	// I initialize the element scroll percentage directive.
	constructor(
		elementRef: ElementRef,
	) {
		this.elementRef = elementRef;
		this.scrollPercentageEvent = new EventEmitter();
	}
	public ngOnInit(): void {
		window.addEventListener('scroll', () => {
			const elementRect = this.elementRef.nativeElement.getBoundingClientRect();
			this.scrollPercent = (window.innerHeight / 2 - elementRect.top) / elementRect.height * 100;
			if(window.scrollY === 0) {
				this.scrollPercent = 0;
			}
			this.scrollPercentageEvent.emit(this.scrollPercent);
		});
	}
	public ngOnDestroy(): void {
	}
}
