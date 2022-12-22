class CharactersController < ApplicationController
    def index 
        characters = Character.all
        render json: characters
    end

    def create 
        character = Character.create(name: params[:name], health: params[:health], str: params[:str], def: params[:def] )
    end
end
