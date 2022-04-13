package stepDefination;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AssignmentSteps {
	
	RemoteWebDriver webDriver ;
	
	@Given("user is on saucedemo homepage")
	public void user_is_on_saucedemo_homepage() {
		
		System.setProperty("webdriver.chrome.driver",  "C:\\FST_Selenium\\chromedriver\\chromedriver.exe");
		webDriver = new ChromeDriver();
		webDriver.get("https://www.saucedemo.com");
	    
	}

	@And("user logged in using correct credential")
	public void user_logged_in_using_correct_credential(io.cucumber.datatable.DataTable dataTable) throws InterruptedException {
	    
		List<List<String>> testData = dataTable.asLists();
		
		for(List<String> rows : testData) {
			if(!rows.get(0).contains("username")) {
				webDriver.findElement(By.id("user-name")).sendKeys(rows.get(0));
				webDriver.findElement(By.id("password")).sendKeys(rows.get(1));
			}
		}
		webDriver.findElement(By.id("login-button")).click();
		
		Thread.sleep(2000);
		
	}

	@And("user adds required item to cart")
	public void user_adds_required_item_to_cart() {
		webDriver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();
		webDriver.findElement(By.id("add-to-cart-sauce-labs-bolt-t-shirt")).click();
	}

	@And("user proceeds to checkout")
	public void user_proceeds_to_checkout() {
		
		webDriver.findElement(By.xpath("//div[@id='shopping_cart_container']/a[@class='shopping_cart_link']")).click();
		webDriver.findElement(By.id("checkout")).click();
	    
	}

	@And("user enters the following details for checkout")
	public void user_enters_the_following_details_for_checkout(io.cucumber.datatable.DataTable dataTable) throws InterruptedException {
		
		Thread.sleep(2000);
		
		List<List<String>> testData = dataTable.asLists();
		
		for(List<String> rows : testData) {
			if(!rows.get(0).contains("FirstName")) {
				webDriver.findElement(By.id("first-name")).sendKeys(rows.get(0));
				webDriver.findElement(By.id("last-name")).sendKeys(rows.get(1));
				webDriver.findElement(By.id("postal-code")).sendKeys(rows.get(2));
			}
		}	
		webDriver.findElement(By.id("continue")).click();
	}

	@When("user confirm checkout")
	public void user_confirm_checkout() {
		webDriver.findElement(By.id("finish")).click();	   
	}

	@Then("user verify final confirmation messagge")
	public void user_verify_final_confirmation_messagge() throws InterruptedException {
		Thread.sleep(2000);
		String actualMsg = webDriver.findElement(By.xpath("//div[@id='checkout_complete_container']/h2")).getText();
		String expMsg = "THANK YOU FOR YOUR ORDER";
	    Assert.assertEquals("Confirmation message is not matching",expMsg,actualMsg);
	    
	    webDriver.close();
	}

	@And("user adds one item and then remove that item to go back")
	public void user_adds_one_item_and_then_remove_that_item_to_go_back() throws InterruptedException {
	    
		webDriver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();		
		webDriver.findElement(By.xpath("//div[@id='shopping_cart_container']/a[@class='shopping_cart_link']")).click();
		
		Thread.sleep(2000);
		webDriver.findElement(By.id("remove-sauce-labs-backpack")).click();		
		webDriver.findElement(By.id("continue-shopping")).click();	  
		
	}

	@Then("user verify final confirmation message")
	public void user_verify_final_confirmation_message() {
		String actualMsg = webDriver.findElement(By.xpath("//div[@id='checkout_complete_container']/h2")).getText();
		String expMsg = "THANK YOU FOR YOUR ORDER";
	    Assert.assertEquals("Confirmation message is not matching",expMsg,actualMsg);
	    
	    webDriver.close();	    
	}

	@And("user sorts item low to high")
	public void user_sorts_item_low_to_high() throws InterruptedException {
		
		WebElement ele = webDriver.findElement(By.xpath("//div[@id='header_container']//select[@class='product_sort_container']"));	
		
		Select sortDropdown = new Select(ele);
		sortDropdown.selectByValue("lohi");
		Thread.sleep(2000);
	}

}
