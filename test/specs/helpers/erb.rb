require 'erb'
require 'ostruct'
require 'json'

puts ERB.new(STDIN.read).result(OpenStruct.new(JSON.parse(ARGV[0])).instance_eval { binding })
