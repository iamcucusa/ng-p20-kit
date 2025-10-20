import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'kit-step-one-scenario',
  standalone: true,
  template: `<p class="text-sm text-500">Scenario {{ route.snapshot.paramMap.get('scenarioId') }}</p>`
})
export class StepOneScenarioSection {
  public route = inject(ActivatedRoute);
}


