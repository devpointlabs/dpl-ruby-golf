import React from 'react';
import { Segment, List, Divider, Container } from 'semantic-ui-react';

const Rules = () => (
  <Container>
    <Segment inverted>
      <List divided inverted relaxed>
        <List.Item>
          <List.Content>
            <List.Header as='h1'>Rules</List.Header>
            <p>
              Solve the following problems in ruby using the fewest amount of characters possible.
              <Divider hidden />
              Each problem should be solved using a single method per hole
              Method Names do not count as characters but params do.
              <Divider hidden />
              <pre>
                def my_awesome_method(num, letter) = 10 chars num,letter
              </pre>
              <Divider hidden />
              Spaces, new lines, and puts statements do NOT count
              The method has to work per the specifications.
              <Divider hidden />
              <h3 style={{ color: 'red', fontWeight: 'bold'}}>
                ** NOTE: DO NOT use any built in Ruby methods that would give you the direct answer.
              </h3>
            </p>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header as='h1'>HOLE 1: Sum an array</List.Header>
            Create a method that takes in an array sums the array then returns the array and the sum.
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header as='h1'>HOLE 2: Rock paper scissors</List.Header>
            Takes a user input the computer randomly chooses and the winner is output to the screen.
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header as='h1'>HOLE 3: FIZZBUZZ</List.Header>
            For numbers 1-100 print “FIZZ” if the number is divisible by 3, “BUZZ” if the number is divisible by 5, “FIZZBUZZ” if the number is divisible by both 3 and 5 otherwise print the number.
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header as='h1'>HOLE 4: Multiples up to a given value</List.Header>
            The method takes in a number and a max value then finds all multiples of the number up to the max value.
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header as='h1'>HOLE 5: Caesar Cipher</List.Header>
            Take in a string and an offset, encrypt the string by moving letters over by the offset and return the encrypted string (e.g “ab”, 3 would return “de”). When you hit Z loop back to A.
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header as='h1'>HOLE 6: String Counter</List.Header>
            Given a string and a sub string count the number of times the substring occurs in the string and print the number to the console.
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header as='h1'>HOLE 7: Mixed pairs</List.Header>
            The method takes in an array of arrays.  Each inner array contains a pair, the method then mixes up the pairs and returns a new array with the pairs mixed up.
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header as='h1'>HOLE 8: Love Test</List.Header>
            Create a method that takes in 2 strings and counts the total number of characters in common. Divide the total number of chars by the number in common. Spaces do not count. Capitols are not the same as lowercase
            Example: "I love this code", "This code loves me"
            Total Chars: 27
            Chars In Common: 7
            Solution: 27 / 7 = 3
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header as='h1'>HOLE 9: Shopping List</List.Header>
            Takes in a list of strings. Program sorts the list non case sensitive, removes duplicates and returns as hash using position in the list as priority.
          </List.Content>
        </List.Item>
      </List>
    </Segment>
  </Container>
);

export default Rules;
