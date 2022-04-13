package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		features = "src/test/java/features/assignmentFeature.feature",
		glue = {"stepDefination"},
		plugin = {"pretty", "html:output/report.html"},
		tags = {"@scenario1,@scenario2,@scenario3"}		
		)

public class TestRunner {

}
