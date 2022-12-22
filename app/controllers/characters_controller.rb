class CharactersController < ApplicationController
    skip_before_action :confirm_authentication
    
    def index 
        characters = Character.all
        render json: characters
    end

    def create 
        character = Character.create(name: params[:name], savepoint: params[:savepoint], health: params[:health], strength: params[:strength], defense: params[:defense], intelligence: params[:intelligence], user_id: params[:user_id])
        if character.save
            render json: character
        else
            render json: {error: "error"}
        end
    end



    
end
